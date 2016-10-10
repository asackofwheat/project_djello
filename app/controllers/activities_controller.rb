class ActivitiesController < ApplicationController

  def create
    @activity = Activity.new(activity_params)
    @activity.person = current_user.email
    if @activity.save
      respond_to do |format|
        format.json {render json: @activity}
      end
    end
  end

  private

  def activity_params
    params.require(:activity).permit(:activity, :object, :card_id, :description)
  end

end
