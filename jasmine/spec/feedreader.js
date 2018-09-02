/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //i deleted the TODOs as you instructed :)
        
         it('URL defined and URL is not empty',function(){

                // i used the arrow function of es6 for cleaner code

            allFeeds.forEach(() => {
            expect($(allFeeds.url)).toBeDefined();
            expect($(allFeeds.url)).not.toBe('');
            });



         });
            it('ensures it has a name defined and name is not empty',function(){
                
                // i used the arrow function of es6 for cleaner code too

            allFeeds.forEach((feed) => {
            expect($(feed.name)).toBeDefined();
            expect($(feed.name)).not.toBe('');
            });



         });
    });
        describe('menu', function() {
        /* function Visibility(elem) {
         var x = document.getElementsByClassName($(elem));
             if (x.style.visibility === "hidden") {
             x.style.visibility = "visible";
             } else {
             x.style.visibility = "hidden";
             }
         
            }*/
            it('ensures the menu element is  hidden', function() {
            //expect($('body.menu-hidden')).toBe(true);
            expect($('body').hasClass('menu-hidden')).toBe(true);  //only one that worked out :)
            //Visibility(menu-hidden);
            }); 
                /* i used the original way despite trying a sepetated function plus i checked 
                for a toggle function but didn't found one */

              it('menu display when clicked', function () {
                $('a.menu-icon-link').click();
                expect($('body').hasClass("menu-hidden")).toBe(false);
            });

            it('hide when clicked', function () {
                $('a.menu-icon-link').click();
                expect($('body').hasClass("menu-hidden")).toBe(true);
            });
});
            describe('Initial Entries', function() {
         beforeEach(function (done) {
            // i used the arrow function of the es6 for cleaner code as well
            loadFeed(0,()=>{
                done();
            });
         });
         it('entry element within the feed container',function(){
             //expect($('.feed').hasClass('entry').length).toBeGreaterThan(0);
             //expect($('.feed').hasClass('entry').length).not.toBe(0);
             expect($('.feed .entry').length).toBeGreaterThan(0);  //the other ones didn't work despite them being syntaxly right :(
         });
     });
            describe('New Feed Selection', function() {
         var first_value , new_value  ;
         beforeEach(function (done){
            /* loadFeed(0,()=>{
                done();
            });
             loadFeed(1,()=>{
                done();
            });
            */
 
            /*the variable first_value is to catch the first value and compare it with the second value because 
              we can't compare them without holding the actual value of one of them at a variable  */
            
            loadFeed(0,function(){
                first_value=$('.feed').html();
                loadFeed(1,()=>{
                    new_value=$('.feed').html();
                done();
                 });
             });
         });
         it('check the new feed',function(){
             //comparing the two values the initail one in the variable with [$('.feed').html()]
             expect(new_value).not.toBe(first_value);
            });
         });
})();