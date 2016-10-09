class BoardsController < ApplicationController

  def index
    @boards = current_user.boards
    respond_to do |format|
      format.json {render json: @boards}
    end
  end

  def show
    @board = Board.find(params[:id])
    if @board.users.include?(current_user)
      respond_to do |format|
        format.json {render json: @board, include: [:users, {lists: {include: {cards: {include: :users}}}}]}
      end
    end
  end

  def create
    @board = current_user.boards.build(board_params)
    if current_user.save
      respond_to do |format|
        format.json {render json: @board, include: [:users, {lists: {include: {cards: {include: :users}}}}]}
      end
    end
  end

  def update
    @board = Board.find(params[:id])
    if @board.users.include?(current_user)
      if @board.update(board_params)
        respond_to do |format|
          format.json {render json: @board, include: [:users, {lists: {include: {cards: {include: :users}}}}]}
        end
      end
    end
  end

  def destroy
    @board = Board.find(params[:id])
    if @board.users.include?(current_user)
      if @board.destroy
        respond_to do |format|
          format.json {render nothing: true, status: 200}
        end
      end
    end
  end

  private

  def board_params
    params.require(:board).permit(:title)
  end

end
