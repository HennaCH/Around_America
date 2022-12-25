Final Java Web Project

Around_America
http://localhost:3000/

Around_America is an application that will help people who are undecisive on there next vacation destination. Whith this application, users will be able to inform themselves on the coutries of America, either it is North America or South America. The app will be able to give information on a specific country, regarding the attractions and the food of the country. In addition, the user will be able to add countries and attractions that are not alreadly on the map to start a travelling journal. They will update the map with their trips.

The application was built using REACT for the frontend, and REST API with Spring Boot and JPA for the backend. To run the app, the user will first need to run the backend code on Intellij and the frontend code on Visual Studio Code. 

While implementing the application, I faced multiple difficulties. For example, in the frontend I was unable to set the background color, immediately when the app starts, without affecting the background color when pressing the heartswitch. I also could not stop the map from moving when typing in the search bar. In the backend, I had difficulties implementing CRUD methods. There were times where I was able to create a country, and there were times where I was not able to create a country, and I did not know why. I was spending a lot of time and effort trying to make the CRUD methods work. I hope that in the future I will be able to fix these kind of errors easily.

In the frontend, I have a class in the components folder for the search bar, the heartswitch, NorthAmerica, and SouthAmeica.
In the backend, I have packages for the controller, the entities, the repositories, the requests, the responses and the services, to be able to implement the CRUD methods. The backend have three entities, a country, an attraction, and a food entity. One country can have many attractions, but can only have on food. The relationship between the country and the attractions is one(country) to many(attractions). The relationship between the country and the food is one(country) to one(food). 

When first going into the application, the background will be white. However, it does not prevent the user from user the functionalities of the app. ![Screenshot (193)](https://user-images.githubusercontent.com/104155362/209456393-581df209-29b9-441d-8106-b3577cf968bb.png)
![Screenshot (194)](https://user-images.githubusercontent.com/104155362/209456397-24574854-a02f-4e04-bac5-0f4e5f93ea41.png)

The user can change the background color using the heart switch, but will first get asked if they are sure to change the backround color.![Screenshot (196)](https://user-images.githubusercontent.com/104155362/209456466-5d6796f7-bb0c-4cec-842d-d80a65b50f44.png)
![Screenshot (197)](https://user-images.githubusercontent.com/104155362/209456471-71da7492-9380-4c12-93e5-8784ea28aec0.png)
![Screenshot (198)](https://user-images.githubusercontent.com/104155362/209456479-9acf5dd9-e503-47d7-be9c-f7cb48909e0a.png)

The user can then choose a map by pressing on the button. When they hover their mouse on a specific country, the marker will change color. Normally when the user hover on a marker, they would get the attraction(s) and food of this country, but I was not able to implement it.![Screenshot (199)](https://user-images.githubusercontent.com/104155362/209456526-046558a3-c7f8-4410-9938-dc4e8821afea.png)
![Screenshot (200)](https://user-images.githubusercontent.com/104155362/209456528-0fe0ce22-824f-4437-bc35-6b18184a732f.png)
![Screenshot (201)](https://user-images.githubusercontent.com/104155362/209456547-8db89e5c-f838-44d7-b6d2-486719fed775.png)
![Screenshot (202)](https://user-images.githubusercontent.com/104155362/209456549-c5832a73-8e4f-4cbe-8971-289f41a7f6f8.png)
![Screenshot (203)](https://user-images.githubusercontent.com/104155362/209456550-0aa513ec-78ec-4bde-961d-7da93d85eb05.png)
![Screenshot (204)](https://user-images.githubusercontent.com/104155362/209456552-1dcc59ac-dbd8-4e1e-9a13-bc8110b6f9e7.png)
 
 When the user searhes for a country, whether it is from NorthAmerica or SouthAmerica, in the searchbar, they will receive the capital of this country. This is perfect if the user wants to do things faster and does not want to go and check on internet. In addition, the result won't change whether the input is in lowercase or uppercase.![Screenshot (205)](https://user-images.githubusercontent.com/104155362/209456618-6d9352d8-aecb-470d-9e3e-eeab7f9e40fc.png)
![Screenshot (206)](https://user-images.githubusercontent.com/104155362/209456621-c8cc79c7-dcab-4c3d-9878-16de77c42381.png)
![Screenshot (207)](https://user-images.githubusercontent.com/104155362/209456622-8df4197c-8360-427c-ac89-435475251674.png)
