# plants-frontend

This site built with React serves as a frontend for [The Plants API](https://github.com/DanSinensky/plantsAPI). 

## Home
<img width="720" alt="home" src="https://github.com/nnmcgovern/plants-frontend/assets/48661257/1bcc99f0-722d-45f7-92c4-92a467dee5c9">
<br /><br />
On the home screen, users can search for a plant in the database by name. The search is not case-sensitive and will automatically query the API for every change in value within the input box (i.e. for each letter the user enters). If one or more matches is found, they will display below the search bar. Clicking on a result will show further details about that plant.
<br /><br />
<img width="720" alt="search" src="https://github.com/nnmcgovern/plants-frontend/assets/48661257/2bd18ce2-44a1-43e9-ab78-d5797a6e415f">

## All Plants
<img width="720" alt="all-plants" src="https://github.com/nnmcgovern/plants-frontend/assets/48661257/43bf6e72-d197-4a3b-91c6-294d16b5493d">
<br /><br />

Clicking the ```All Plants``` link in the header will display all of the plants currently listed in the database. Clicking on a plant's name or image will display further details about that plant. 

## Plant Detail
<img width="720" alt="plant-detail" src="https://github.com/nnmcgovern/plants-frontend/assets/48661257/cf973667-f086-4ead-923a-ca4865b1e74c">
<br /><br />
The details page of a particular plant will display the plant's common name, an image of the plant, as well as other information such as scientific name, other common names, family, dimensions, origin, and a description.
<br /><br />

At the bottom of the page are two buttons to either edit the plant's information or delete the plant from the database. Clicking on the ```Edit Plant``` button will take the user to the Edit screen where the plant's details can be updated.
<br /><br />
<img width="720" alt="edit-plant" src="https://github.com/nnmcgovern/plants-frontend/assets/48661257/6ea39705-e275-4f95-a6ae-a26ed2bfde8e">
<br /><br />
Clicking on the ```Delete Plant``` button will delete the plant from the database and redirect the user back to the All Plants screen.

## Add New Plant
Clicking ```Add New Plant``` will take the user to a form to enter information for a new plant. When the user clicks submit, the new plant is created and added to the database, and the user is redirected to the All Plants screen.
<br /><br />
<img width="720" alt="add-new-plant" src="https://github.com/nnmcgovern/plants-frontend/assets/48661257/bd9c7c3d-81a0-4afc-af34-5bc90542fb57">
