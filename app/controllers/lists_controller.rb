class ListsController < ApplicationController

  def create
    @list = List.new(list_params)
    if @list.save
      respond_to do |format|
        format.json {render json: @list}
      end
    end
  end

  def update
    @list = List.find(params[:id])
    if @list.board.users.include?(current_user)
      if @list.update(list_params)
        respond_to do |format|
          format.json {render json: @list}
        end
      end
    end
  end

  def destroy
    @list = List.find(params[:id])
    if @list.board.users.include?(current_user)
      if @list.destroy
        respond_to do |format|
          format.json {render nothing: true, status: 200}
        end
      end
    end
  end

  private

  def list_params
    params.require(:list).permit(:title, :description, :board_id)
  end

end
