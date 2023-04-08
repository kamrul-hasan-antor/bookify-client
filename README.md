# Bookify Hotel Booking App

## Live_Link: https://bookify-ce1d5.web.app/

### Admin : kamrulhasan.antor95@gmail.com

### Password : 123456

#### Technologies -----------

1. For fronend design and functionality I use React JS and Tailwind CSS and some related packages to created the frontend beautiful and interactive.

2. In the backend part I use Node JS, Express JS for creat and use the server and MongoDB for database.

3. I use Stripe JS for payment gateway and ImgBB for image hosting.

#### Features (User) -----------

1. This website provides users with an easy way to book hotel rooms.
2. The home page includes a search option where users can select their destination, check-in and check-out dates, and the number of guests.
3. Upon clicking the search button, users will be directed to the hotels page, where hotels will be displayed based on the selected destination.
4. On the hotels page, users can modify their previous search options, such as the destination, and use the filters to refine their search results. For example, users can search for hotels by name and filter by accommodation type and facilities.
5. Upon clicking the "view rooms" button, users will be directed to the hotel details page, where they can view all the available rooms.
6. Upon clicking the "add room" button, the selected room will be added to the user's cart.
7. On the cart page, users can proceed to the payment page, which will display the selected room and the check-in and check-out dates.
8. Users must fill out their guest details and make payment using their card information. (Demo card information: 4242 4242 4242 4242, any future date, CVC: any 3-digit number, and 5-digit zip code).
9. Upon making payment, users will be redirected to the "My Bookings" page, where they can view all the hotels and rooms they have booked.
10. The admin routes are protected, and users are not allowed to navigate to the admin page.

#### Features (Admin) -----------

1. Once an administrator logs in, they will have access to an "Admin Route" option in the navigation bar.
2. The administrator will be able to view all the bookings made by users.
3. The administrator has the ability to add hotels by providing the necessary information.
4. The administrator can view all the hotels that have been added in the "All Hotels" option. From there, they can edit the hotel's information and delete the hotel. If the administrator deletes a hotel, all the rooms added to that hotel will also be deleted. A pop-up confirmation will be provided to the administrator.
5. Additionally, the administrator can add rooms to a specific hotel by providing the required information, as well as update or delete any existing room.
6. The administrator has access to view all registered users.
