# Hospital_Management_System 

## Description 
It is a hospital/doctor appointment booking website where hospitals are firstly filtered based on required departments or tests, and then are sorted according to their distance from user's current location.
Here you can book two types of appointment, normal OPD appointment and Doctor specific appointment. User's profile is also maintained, where user can see their 
credentials and previous appointments and can also cancel upcoming appointments.

## Live demo 
[Click here to open the live demo](https://hospital-management-website.herokuapp.com/) 

## Key features 
- **Hompage:** Here user can find list of departments, where they have to visit

![homepage](https://github.com/rajnish1999/Hospital_Management_Website/blob/master/src/public/images/websiteImages/landingPage1.png)
<br></br>
![homepage](https://github.com/rajnish1999/Hospital_Management_Website/blob/master/src/public/images/websiteImages/landingPage2.png)
<br></br>

- **Department wise hospital page:** Here department wise list of hospitals will be there. Along with this there will be a  map on which hospitals will be indicated
    and hence user can visually take a rough idea about distance of respective hospitals from his current location
    
    ![deptWiseHosp](https://github.com/rajnish1999/Hospital_Management_Website/blob/master/src/public/images/websiteImages/deptWiseHosp1.png)
    <br></br>
    ![deptWiseHosp](https://github.com/rajnish1999/Hospital_Management_Website/blob/master/src/public/images/websiteImages/deptWiseHosp2.png)
    <br></br>
    
- **SignUp page:** 

![signUp](https://github.com/rajnish1999/Hospital_Management_Website/blob/master/src/public/images/websiteImages/signUp.png)
<br></br>

- **login Page:**

![login](https://github.com/rajnish1999/Hospital_Management_Website/blob/master/src/public/images/websiteImages/login.png)
<br></br>

- **Specific hospital page:** Here there will be  option for two types of appointment, OPD and doctor specific appointment. The appointment can be booked for seven 
    days starting from the day of visit to website. Website and google map link for respective hospital is also given on this page
    
    ![appointment](https://github.com/rajnish1999/Hospital_Management_Website/blob/master/src/public/images/websiteImages/appointment.png)
    <br></br>
    
- **OPD appointment acknowledgement page:** An acknowledgement will be generated based on user's appointment, and user can download it

    ![generalApp](https://github.com/rajnish1999/Hospital_Management_Website/blob/master/src/public/images/websiteImages/generalApp.png)
    <br></br>
    
- **Hospital specific departments page:** Here user will be redirected after he choose to book doctors appointment, so that he can choose the department

![hospWiseDept](https://github.com/rajnish1999/Hospital_Management_Website/blob/master/src/public/images/websiteImages/hospWiseDept.png)
<br></br>

- **Department wise doctors page:** This page has a list of doctors along with their date of availability, sorted according to their rating

![doctors](https://github.com/rajnish1999/Hospital_Management_Website/blob/master/src/public/images/websiteImages/doctors.png)
<br></br>

- **Doctors appointment page:** Here user can book doctor's appointment for their day of visit and next six days

![docApp](https://github.com/rajnish1999/Hospital_Management_Website/blob/master/src/public/images/websiteImages/docApp.png)
<br></br>

- **Doctor's appointment acknowledgement page:** An acknowledgement will be generated based on user's appointment, and user can download it

![docAppAck](https://github.com/rajnish1999/Hospital_Management_Website/blob/master/src/public/images/websiteImages/docAppPdf.png)
<br></br>

- **User profile:** Here user can see their details including their appointments. They can also cancel their appointments from this page

![user](https://github.com/rajnish1999/Hospital_Management_Website/blob/master/src/public/images/websiteImages/user1.png)
<br></br>
![user](https://github.com/rajnish1999/Hospital_Management_Website/blob/master/src/public/images/websiteImages/user2.png)
<br></br>

- **Contact us page:** User can reach us for any kind of issue, using this page

![contactUs](https://github.com/rajnish1999/Hospital_Management_Website/blob/master/src/public/images/websiteImages/contact.png)
<br></br>

## Libraries used
- Node.js
- Express.js
- Passport.js (for authentication)
- jsPDF (for generating and downloading PDF of appointment acknowledgement)
- EJS (templating engine)
- Bootstrap (for quick layout designing and theming)
- MapBox GL JS (for locating hospitals on map)
- SendGrid API (for generating mail after appointment)
- Vonage(Nexmo) API (for generating sms after appointment)

## Database used
- MongoDB Atlas (**ODM:** Mongoose)


## Bonus Points
- Mobile responsive

## Project Setup
```
  npm install
  npm run start
```
  
    
 
