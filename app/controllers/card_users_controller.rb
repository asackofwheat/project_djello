class CardUsersController < ApplicationController

  def create
    @carduser = CardUser.new(card_user_params)
    if @carduser.save
      respond_to do |format|
        format.json {render json: @carduser}
      end
    end
  end

  def show
    @card = Card.find(params[:card_id])
    @user = User.find(params[:user_id])
    if @card.users.delete(@user)
      respond_to do |format|
        format.json {render json: @card}
      end
    end
  end

  private

  def card_user_params
    params.require(:card_user).permit(:user_id, :card_id)
  end

end
