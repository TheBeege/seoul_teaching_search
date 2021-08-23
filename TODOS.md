# TODOS
If you don't know what this document is, I can't help you. You're beyond saving. I recommend a job digging holes or sticking forks into electrical sockets or Instagram.

* [Pre-MVP](#pre-mvp-phase--1)
* [MVP](#mvp-phase-0)
* [Phase 1](#phase-1)
* [Phase 2](#phase-2)
* [Phase 3](#phase-3)
* [Phase 4](#phase-4)
* [Phase 5](#phase-5)

## Pre-MVP (Phase -1)
See [the homepage wireframe](doc/wireframes/home.png) as a reference. This should only be used for an idea of positioning and items to be displayed. Additional styling and exact positioning can be determined by the person implemeting each item.
* ~~There is a header with a logo. Logo and header content TBD, so placeholders are fine for now.~~
* There is a search bar that doesn't work. It has a text field and search button. It has an event handler triggered when either enter is pressed while focused in the search form when the search button is clicked. The event handler should do nothing for now.
* There are checkboxes on the left side of the screen as show in the wireframe. Each checkbox has an event handler to update the filtering. This event handler should do nothing for now.
* Above the checkboxes on the left is a button for pausing filter updates. When clicked, it should disable the checkbox event handlers. When clicked, it should change its text to "Update results". When "Update results" is clicked, it should return to its original text, trigger updating the results according to the filters, and enable the checkbox event handlers again
* Below the checkboxes on the left should be two slider options as shown in the wireframe. Their event handling should behave the same as the checkboxes.
* There should be mock results in the main pane. They should consist of a linked title, an excerpt of the job description, the company name, the location, supported visas, the working hours, and the salary offer.
* Below the mock results, there should be some paging buttons/links. Exact content and styling of this is highly open to change. They should have some event handler to update results, but that handler should do nothing for now.
* \[Low Priority] There should be a navigation bar as shown in the wirefame.
* \[Low Priority] Fill out the About page.
* \[Low Priority] The Contribute link should point to the Github repo.
* \[Low Priority] The Support Us page should link to the CodeSeoul PayPal link. (This does not yet exist.)
* \[Low Priority] The Feedback link should link to the CodeSeoul Discord.

## MVP (Phase 0)
This is blocked until the backend API is completed. Bother @TheBeege on Discord if stuff isn't updating. Feel free to call him lazy or an asshole or something. He'll laugh, and it'll get him to finish it faster.
* The page should call the API to list job postings on initial load. This initial request should use no filters and limit the page size to 20 results.
* The results' contents should be populated according to the output of the API call to list job postings.
    * Each result title's link should use the link output of the result. Additional fields should be self-explanatory.
* The various event handlers should simply update the filter parameters. There should be a method to get the results list that just uses the current parameters as determined by the filter checkboxes, filter sliders, search input, and pagination buttons.
* A proper DNS entry should exist for the website.

## Phase 1
These will be much higher level descriptions until we get closer to this implementation.
* There should be a page for displaying the content of a job posting, where the content is fetched from the API. The original posting link should be separate.
* There should be a way to view companies and all their postings.
* There should be a way to review companies as either a student, parent, or teacher.
  * There should be some way to prevent brigading, but this will likely be handled at the API level.
* Users should be able to filter by review score.

## Phase 2
* We'll support user accounts and posting jobs directly to our site in addition to scraping from other sites.
* We'll support RBAC and an admin panel.

## Phase 3
* We'll support payments for advertised postings. These postings will appear at the top of results and be labeled as sponsored.

## Phase 4
* We'll support teachers recording their job history and other resume/CV information for easier, more automated job application.

## Phase 5
* The sky is the limited. Please provide suggestions.
