/**
 * Created by jshen on 8/19/15.
 */
describe('location search spec', function() {
    var onSuccess, onFailure, request, response, search;
    beforeEach(function () {
        jasmine.getFixtures().fixturesPath = 'base/spec/javascript/fixtures';
        loadFixtures("fixtures.html");
        expect($('#searchButton')).toExist();
        jasmine.Ajax.install();
        response = [{"name": "beijing", "description": "didu"}];
    });
    describe("search spec", function() {

        it("should call callback function with correct result", function() {
            var likePlace = new LikePlaces();
            $('body').trigger("like", "beijing");

            var htmlText = '<li class="like">beijing</li>';

            expect($('#likedPlaces').find('ul').find('li')).toHaveText('beijing');

            var searchRes = new SearchResultList();
            $('body').trigger("display", {data: response});

            htmlText = '<div class="panel large-12 columns">' +
                '<h5>beijing</h5>' +
                '<h6>didu</h6>' +
                '<a href="#" class="like button tiny right">Like</a>' +
                '</div>';

            expect($('#results')).toContainHtml(htmlText);

            //search = new Search();
            //$(document).trigger('search', 'beijing');
            //var domOperator = new DOMOperator();
            //locationSearch = new LocationSearch(domOperator);
            ////onSuccess = jasmine.createSpy('onSuccess');
            //spyOn(domOperator, 'appendLocationList');
            ////onFailure = jasmine.createSpy('onFailure');
            //locationSearch.search('beijing');
            //request = jasmine.Ajax.requests.mostRecent();
            //expect(request.url).toBe('http://location-backend-service.herokuapp.com/locations?name=beijing');
            //expect(request.method).toBe('GET');
            //request.respondWith({
            //    status: 200,
            //    responseText: '[{"name": "beijing", "description": "didu"}, {"name": "shanghai", "description": "modu"}]'
            //});
            //expect(domOperator.appendLocationList).toHaveBeenCalledWith(response);
            //var successArgs = domOperator.appendLocationList.calls.mostRecent().args[0];
            //console.log(successArgs);
            //expect(successArgs.length).toBe(2);
            //domOperator.appendLocationList(response);
            ////$('#results').html("beijing");
            ////expect($('#results')).toHaveHtml(domOperator.getHtmlFromJson(response));
            //expect($('#searchResults')).toContainText('Search');
            //expect($('#results')).toContainText("beijing");
        });

        //it("should list results when call with certain data", function() {
        //    var domOperator = new DOMOperator();
        //    domOperator.appendLocationList(response);
        //
        //});
    });
});