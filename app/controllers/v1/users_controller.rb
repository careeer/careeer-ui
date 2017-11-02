# frozen_string_literal: true

module V1
  # User endpoints
  class UsersController < ApplicationController
    def create
      @user = User.new(user_params)

      if @user.save
        render :create, status: :created
      else
        head(:unprocessable_entity)
      end
    end

    private

    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end
  end
end
