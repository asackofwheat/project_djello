class CardsController < ApplicationController

  def create
    @card = Card.new(card_params)
    @card.users << current_user
    @card.activities.build(person: current_user.email, activity: "created", object: "card")
    if @card.save
      respond_to do |format|
        format.json {render json: @card, include: [:users, :activities]}
      end
    end
  end

  def show
    @card = Card.find(params[:id])
    if @card.list.board.users.include?(current_user)
      respond_to do |format|
        format.json {render json: @card, include: [:users, :activities]}
      end
    end
  end

  def update
    @card = Card.find(params[:id])
    if @card.list.board.users.include?(current_user)
      if @card.update(card_params)
        respond_to do |format|
          format.json {render json: @card, include: [:users, :activities]}
        end
      end
    end
  end

  def destroy
    @card = Card.find(params[:id])
    if @card.list.board.users.include?(current_user)
      if @card.destroy
        respond_to do |format|
          format.json {render nothing: true, status: 200}
        end
      end
    end
  end

  private

  def card_params
    params.require(:card).permit(:title, :description, :list_id, :id, :updated_at, :created_at)
  end

end
