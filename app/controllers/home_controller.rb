class HomeController < ApplicationController
  def index

  end

<<<<<<< HEAD
# takes the form data from _form partial on homepath
  def points
    locale = Location.create( :address => params[:locale] )
    lat = locale.latitude.to_f
    lng = locale.longitude.to_f
# instagram api request
    url = "https://api.instagram.com/v1/locations/search.json?lat=#{lat.round(3)}&lng=#{lng.round(3)}&distance=5000&client_id=efea46f4c52542348ced4c529263cf33"
# creates an instance variable @result with the json object
    @result = HTTParty.get url
# makes the json data available for ajax
    render :json => @result
=======
<<<<<<< HEAD

end
=======
  def map
>>>>>>> 5071e94ac7a0dd8464f6ec23c07b81e16581b4ad
  end
end
>>>>>>> aebcfa96e91ae37e4959a77778b5a3568a2079ef
