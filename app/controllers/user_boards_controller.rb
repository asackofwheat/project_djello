class UserBoardsController < ApplicationController

  def create
    @userboard = UserBoard.new(user_board_params)
    if @userboard.save
      respond_to do |format|
        format.json {render json: @userboard}
      end
    end
  end

  private

  def user_board_params
    params.require(:user_board).permit(:user_id, :board_id)
  end

end
