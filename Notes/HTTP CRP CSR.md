SSR vs CSR



SSR

Search engine optimised.
It has faster loading time
For consumer products
 Disadv - user interactivity would be slow, cost and server management

CSR
Initial load time is more
User interactivity would be efficient
Handle search engine optimization


Cookies:


HTTP VS HTTPS:

Http lacks security 
Https provides ssl certificate.


How Web Page is Rendered on Web Browser

Critical rendering path
DOM tree.  - create the DOM tree using markup
  Link -> request the external css..
CSSOM tree
		Create css structure between parents child and siblings
Render tree - create a tree with both DOM and CSSOM tree
Layout tree - it will position the elements and based on the render tree
Paint - actual painting on the browser happens here.


HTTP CACHE:

no-cache - attribute can be utilised to not let browser cache it, dynamic names given to images to not allow browser to cache.



HTTP HEADERS

HTTP STATUS CODE

100 - 599

200 sequence - 200 - 299 => success messages. 200 - ok status
400 sequence - 400 - 499 => client side error codes , 401, 403, 404
500 sequence - 500 - 599 => server side error code - 500
300 sequence - redirection status code


CSRF - it forces the authenticated user to submit a req to which they are logged in
Script Injection - scripts can be injected while manipulating/adding elements inside DOM( we can filter any script injection by constructing a common method to filter out any scripts). Json response can also be injected( can add any sequence in the start and at the end of the json request to verify no injection has happened).



