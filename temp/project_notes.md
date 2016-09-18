www.my-outdoor-adventures.com
Concept: A website that allows a person to record their different camping adventures and find popular destinations in their area. Users may write a short review of their adventure, post a single picture, and people may search other's adventures and upvote or downvote their own adventures. Campgrounds may be radius searched by city name and filtered by ranking.

Pages needed:
------------------ No Login ----------------------------------------------------
Search/Index page: Allows users to search campgrounds without login / displays my adventures link if logged in. City / State fields for search radius.

Campground Profile page: All API pictures, address, contact info, description, user reviews

User Profile page: Shows adventures / linked to from url or from an individual review / most recent on Search/Index page. When a logged in user visits his own profile page, a Button to link to create adventure page, settings button. Link to Search/Index page.

------------------ Login -------------------------------------------------------
Login page: username / password - redirects to Main page after login

Registration page: email / username / password - redirects to main page after login. email with email verification. default city/state for searches.

Create Adventure page: Allows people to create their adventures (from result of a campground search), upload a picture, write a review, and upvote or downvote the campground.

Settings page: Ability to change username / password / email / city / state

---------------------- Database ERD --------------------------------------------
Relations: users, facilities, adventures, facility_images

users:
  id: increments
  created_at: timestamp, required
  updated_at: timestamp, required
  deleted_at: timestamp, optional
  user_name: varChar(255), unique, required
  hashed_password: special 60chars
  first_name: varChar(255), required
  last_name: varChar(255), required
  email: varChar(255), unique, required
  hashed_email: special 60chars
  email_verified_at: timestamp, optional

facilities:
  id: increments
  created_at: timestamp, required
  updated_at: timestamp, required
  deleted_at: timestamp, optional

  // API Fields to store ----------
  ridb_facility_id: required, unique - the foreign key in API results
  facility_email: varchar(255)
  facility_latitude: float [46.73527777777778 (17, 14)]
  facility_longitude: float [-121.97027777777778 (17, 14)]
  facility_description: text
  facility_type_description: varchar(255)
  facility_phone: varchar(255)
  facility_map_url: varchar(255)
  facility_reservation_url: varchar(255)
  facility_directions: text
  facility_name: varchar(255)
  keywords: text
  facility_use_fee_description: varchar(255)
  stay_limit: varchar(255)
  last_updated_date: timestamp
  facility_ada_access:  varchar(255)
  legacy_facility_id: integer
  org_facility_id: varchar(255)
  facility_address_type: required, default to ''
  facility_street_address1: required, default to ''
  facility_street_address2: required, default to ''
  facility_street_address3: required, default to ''
  city: required, default to ''
  address_state_code: required, default to ''
  postal_code: required, default to ''
  address_country_code: required, default to ''

adventures:
  id: increments
  user_id: foreign key, required
  facility_id: foreign key, required
  created_at: timestamp, required
  updated_at: timestamp, required
  deleted_at: timestamp, optional
  trip_from_date: timestamp, required
  trip_to_date: timestamp, required
  review_text: text, required,
  recommend: boolean, required

facility_images:
  id: increments
  facility_id: foreign key, required
  createdAt: timestamp, required
  updatedAt: timestamp, required
  deletedAt: timestamp, optional
  image_url: varchar(255)
  adventure_id: foreign key, optional!!!!!!!!!!

-------------------------- API's -----------------------------------------------
RIDB - For campground information
Mailgun - To send verification emails for email address verification
IPInfo - To pull default City / State from IP address


-----------------Samples from RIDB.com API -------------------------------------
apiKey: 28865E612CC64AB3A06BF724737A08DC

facilities - sample response
{ RECDATA:
   [ { FacilityEmail: '',
       FacilityLongitude: -121.97027777777778,
       FacilityDescription: '<h2>Overview</h2>Situated in the vicinity of majestic Mount Rainier, Big Creek is a family campground nestled among Douglas firs, hemlock, alders and maples. The lush vegetation offers plenty of privacy between sites. <br /><br />The sites at Big Creek form a loop, with only a handful of sites sitting along the banks of Big Creek. Open from mid-May through late September, Big Creek provides an alternative to the campgrounds at Mount Rainier National Park, which can get very crowded during the summer. <h4>Natural Features:</h4>Located in southwest Washington State, the Gifford Pinchot National Forest encompasses over 1.3 million acres and includes the 110,000-acre Mount St. Helens National Volcanic Monument established by Congress in 1982. <br /><br />Big Creek is located in the Cowlitz Valley Ranger District, the northernmost portion of the Gifford Pinchot National Forest. This Ranger District manages four Wilderness Areas including the Goat Rocks Wilderness, Glacier View Wilderness, Tatoosh Wilderness and William O Douglass Wilderness. <br /><br />The Cowlitz Valley Ranger District is roughly located among three volcanic peaks: Mt. Rainier to the north, Mt. Adams to the east, and Mt. St. Helens to the west, providing visitors with a unique geological landscape. <h4>Recreation:</h4>Anglers can try their luck at catching brook trout in Big Creek or for those looking to explore the area, the Osborne Mountain Trail starts at the campground. The route is steep, but the scenery is amazing, and the trail can be traversed by foot, horse, mountain bike or dirt bike. <h4>Facilities:</h4>The campground requires vehicles to have a relatively tight turning radius. Big Creek can accommodate tents, trailers and RVs, with a maximum vehicle length of 22 feet. <br /><br />Some parking spurs are paved; others are native moss and dirt. Some sites have rocks or heavy vegetation, which may make it difficult to pitch a tent. <br /><br />Drinking water is available, but there are no hot showers available onsite. Vault toilets are provided as well as a pedestal grill, fire pit and picnic table at each site. <br /><br />Gray water disposal facilities are located throughout the campground.  <h4>Nearby Attractions:</h4>Big Creek is 6 miles from the Nisqually entrance of Mount Rainier National Park. The popular Henry M. Jackson Memorial Visitor Center at Paradise is 21 miles away, and the nearby town of Ashford offers restaurants, along with a few art galleries and shops.',
       FacilityLatitude: 46.73527777777778,
       FacilityTypeDescription: 'Camping',
       FacilityPhone: '541-338-7869',
       FacilityMapURL: '',
       FacilityReservationURL: '',
       FacilityDirections: 'From Ashford, WA, take Forest Road 52 approximately 5 miles to the campground.',
       FacilityName: 'Big Creek',
       Keywords: '',
       FacilityUseFeeDescription: '',
       StayLimit: '',
       GEOJSON: { COORDINATES: [ -120.6776, 47.2487 ], TYPE: 'Point' },
       LastUpdatedDate: '2016-09-08',
       FacilityAdaAccess: '',
       LegacyFacilityID: 74098,
       OrgFacilityID: 'AN374098',
       FacilityID: 234086 },
     { FacilityEmail: '',
       FacilityLongitude: -121.97027777777778,
       FacilityDescription: '<h2>Overview</h2>Situated in the vicinity of majestic Mount Rainier, Big Creek is a family campground nestled among Douglas firs, hemlock, alders and maples. The lush vegetation offers plenty of privacy between sites. <br /><br />The sites at Big Creek form a loop, with only a handful of sites sitting along the banks of Big Creek. Open from mid-May through late September, Big Creek provides an alternative to the campgrounds at Mount Rainier National Park, which can get very crowded during the summer. <h4>Natural Features:</h4>Located in southwest Washington State, the Gifford Pinchot National Forest encompasses over 1.3 million acres and includes the 110,000-acre Mount St. Helens National Volcanic Monument established by Congress in 1982. <br /><br />Big Creek is located in the Cowlitz Valley Ranger District, the northernmost portion of the Gifford Pinchot National Forest. This Ranger District manages four Wilderness Areas including the Goat Rocks Wilderness, Glacier View Wilderness, Tatoosh Wilderness and William O Douglass Wilderness. <br /><br />The Cowlitz Valley Ranger District is roughly located among three volcanic peaks: Mt. Rainier to the north, Mt. Adams to the east, and Mt. St. Helens to the west, providing visitors with a unique geological landscape. <h4>Recreation:</h4>Anglers can try their luck at catching brook trout in Big Creek or for those looking to explore the area, the Osborne Mountain Trail starts at the campground. The route is steep, but the scenery is amazing, and the trail can be traversed by foot, horse, mountain bike or dirt bike. <h4>Facilities:</h4>The campground requires vehicles to have a relatively tight turning radius. Big Creek can accommodate tents, trailers and RVs, with a maximum vehicle length of 22 feet. <br /><br />Some parking spurs are paved; others are native moss and dirt. Some sites have rocks or heavy vegetation, which may make it difficult to pitch a tent. <br /><br />Drinking water is available, but there are no hot showers available onsite. Vault toilets are provided as well as a pedestal grill, fire pit and picnic table at each site. <br /><br />Gray water disposal facilities are located throughout the campground.  <h4>Nearby Attractions:</h4>Big Creek is 6 miles from the Nisqually entrance of Mount Rainier National Park. The popular Henry M. Jackson Memorial Visitor Center at Paradise is 21 miles away, and the nearby town of Ashford offers restaurants, along with a few art galleries and shops.',
       FacilityLatitude: 46.73527777777778,
       FacilityTypeDescription: 'Camping',
       FacilityPhone: '541-338-7869',
       FacilityMapURL: '',
       FacilityReservationURL: '',
       FacilityDirections: 'From Ashford, WA, take Forest Road 52 approximately 5 miles to the campground.',
       FacilityName: 'Big Creek',
       Keywords: '',
       FacilityUseFeeDescription: '',
       StayLimit: '',
       GEOJSON: [Object],
       LastUpdatedDate: '2016-09-08',
       FacilityAdaAccess: '',
       LegacyFacilityID: 74098,
       OrgFacilityID: 'AN374098',
       FacilityID: 234086 },
     { FacilityEmail: '',
       FacilityLongitude: -121.97027777777778,
       FacilityDescription: '<h2>Overview</h2>Situated in the vicinity of majestic Mount Rainier, Big Creek is a family campground nestled among Douglas firs, hemlock, alders and maples. The lush vegetation offers plenty of privacy between sites. <br /><br />The sites at Big Creek form a loop, with only a handful of sites sitting along the banks of Big Creek. Open from mid-May through late September, Big Creek provides an alternative to the campgrounds at Mount Rainier National Park, which can get very crowded during the summer. <h4>Natural Features:</h4>Located in southwest Washington State, the Gifford Pinchot National Forest encompasses over 1.3 million acres and includes the 110,000-acre Mount St. Helens National Volcanic Monument established by Congress in 1982. <br /><br />Big Creek is located in the Cowlitz Valley Ranger District, the northernmost portion of the Gifford Pinchot National Forest. This Ranger District manages four Wilderness Areas including the Goat Rocks Wilderness, Glacier View Wilderness, Tatoosh Wilderness and William O Douglass Wilderness. <br /><br />The Cowlitz Valley Ranger District is roughly located among three volcanic peaks: Mt. Rainier to the north, Mt. Adams to the east, and Mt. St. Helens to the west, providing visitors with a unique geological landscape. <h4>Recreation:</h4>Anglers can try their luck at catching brook trout in Big Creek or for those looking to explore the area, the Osborne Mountain Trail starts at the campground. The route is steep, but the scenery is amazing, and the trail can be traversed by foot, horse, mountain bike or dirt bike. <h4>Facilities:</h4>The campground requires vehicles to have a relatively tight turning radius. Big Creek can accommodate tents, trailers and RVs, with a maximum vehicle length of 22 feet. <br /><br />Some parking spurs are paved; others are native moss and dirt. Some sites have rocks or heavy vegetation, which may make it difficult to pitch a tent. <br /><br />Drinking water is available, but there are no hot showers available onsite. Vault toilets are provided as well as a pedestal grill, fire pit and picnic table at each site. <br /><br />Gray water disposal facilities are located throughout the campground.  <h4>Nearby Attractions:</h4>Big Creek is 6 miles from the Nisqually entrance of Mount Rainier National Park. The popular Henry M. Jackson Memorial Visitor Center at Paradise is 21 miles away, and the nearby town of Ashford offers restaurants, along with a few art galleries and shops.',
       FacilityLatitude: 46.73527777777778,
       FacilityTypeDescription: 'Camping',
       FacilityPhone: '541-338-7869',
       FacilityMapURL: '',
       FacilityReservationURL: '',
       FacilityDirections: 'From Ashford, WA, take Forest Road 52 approximately 5 miles to the campground.',
       FacilityName: 'Big Creek',
       Keywords: '',
       FacilityUseFeeDescription: '',
       StayLimit: '',
       GEOJSON: [Object],
       LastUpdatedDate: '2016-09-08',
       FacilityAdaAccess: '',
       LegacyFacilityID: 74098,
       OrgFacilityID: 'AN374098',
       FacilityID: 234086 } ],
  METADATA:
   { SEARCH_PARAMETERS:
      { QUERY: 'Creek',
        ACTIVITY: '5,6,7,9,11,14,15,16,18,20,22,23,25,26,27,28,30,31,34,43,104,105,106,107,108,109',
        OFFSET: 0,
        LIMIT: 3,
        LONGITUDE: -122.4984306,
        RADIUS: 40,
        LATITUDE: 47.1595847 },
     RESULTS: { TOTAL_COUNT: 8, CURRENT_COUNT: 3 } } }

facilities/:id/facilityaddresses - sample response
{ RECDATA:
   [ { FacilityAddressID: 15394606,
       PostalCode: 98304,
       FacilityAddressType: '',
       AddressStateCode: 'WA',
       FacilityStreetAddress1: '',
       City: 'ASHFORD',
       FacilityStreetAddress3: '',
       FacilityStreetAddress2: '',
       FacilityID: 234086,
       AddressCountryCode: 'USA' } ],
  METADATA:
   { SEARCH_PARAMETERS: { QUERY: '', OFFSET: 0, LIMIT: 50, FACILITYID: 234086 },
     RESULTS: { TOTAL_COUNT: 1, CURRENT_COUNT: 1 } } }



facilities/:id/media - sample response
{ RECDATA:
   [ { EntityType: 'Facility',
       EntityID: 234086,
       MediaID: 71740,
       Credits: '',
       Description: '',
       Subtitle: '',
       EmbedCode: '',
       Height: 360,
       MediaType: 'Image',
       URL: 'http://ridb.recreation.gov/images/71740.jpg',
       Width: 540,
       Title: 'Big Creek' },
     { EntityType: 'Facility',
       EntityID: 234086,
       MediaID: 71772,
       Credits: '',
       Description: '',
       Subtitle: '',
       EmbedCode: '',
       Height: 360,
       MediaType: 'Image',
       URL: 'http://ridb.recreation.gov/images/71772.jpg',
       Width: 540,
       Title: 'Big Creek' },
     { EntityType: 'Facility',
       EntityID: 234086,
       MediaID: 71789,
       Credits: '',
       Description: '',
       Subtitle: '',
       EmbedCode: '',
       Height: 360,
       MediaType: 'Image',
       URL: 'http://ridb.recreation.gov/images/71789.jpg',
       Width: 540,
       Title: 'Big Creek' },
     { EntityType: 'Facility',
       EntityID: 234086,
       MediaID: 71807,
       Credits: '',
       Description: '',
       Subtitle: '',
       EmbedCode: '',
       Height: 360,
       MediaType: 'Image',
       URL: 'http://ridb.recreation.gov/images/71807.jpg',
       Width: 540,
       Title: 'Big Creek' },
     { EntityType: 'Facility',
       EntityID: 234086,
       MediaID: 71856,
       Credits: '',
       Description: '',
       Subtitle: '',
       EmbedCode: '',
       Height: 360,
       MediaType: 'Image',
       URL: 'http://ridb.recreation.gov/images/71856.jpg',
       Width: 540,
       Title: 'Big Creek' } ],
  METADATA:
   { SEARCH_PARAMETERS: { QUERY: '', OFFSET: 0, LIMIT: 50, FACILITYID: 234086 },
     RESULTS: { TOTAL_COUNT: 5, CURRENT_COUNT: 5 } } }

------------ Samples from ip-api.com -------------------------------------------
axios.get('http://ip-api.com/json')

{
  as: "AS7922 Comcast Cable Communications, LLC",
  city: "Tacoma",
  country: "United States",
  countryCode: "US",
  isp: "Comcast Cable",
  lat: 47.198,
  lon: -122.4473,
  org: "Comcast Cable",
  query: "98.237.171.225",
  region: "WA",
  regionName: "Washington",
  status: "success",
  timezone: "America/Los_Angeles",
  zip: "98408"
}

-------------- Cloudinary ------------------------------------------------------
Image upload: https://api.cloudinary.com/v1_1/dizbvx6ti/image/upload
Image retreival base url: https://res.cloudinary.com/dizbvx6ti
API Key: 542455694988324
API Secret: xdaHz3Gmc1Q1QA2sAjj4rsB68-s

-------------- Default users ---------------------------------------------------
// Unverified Email
un: chadlatham
pw: Test1234
email: chadlatham33@gmail.com

// Verified Email
un: corypedersen
pw: Test1234
email: corypedersen@gmail.com

// Deleted User
un: deleteduser
pw: Test1234
email: deleted@gmail.com
