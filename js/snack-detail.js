$(function () {
    let recipeId = document.location.href.split("/");
    let fromShopingList = (recipeId[recipeId.length - 1] === "a");
    recipeId = recipeId[recipeId.length - 2];

    if (fromShopingList) {
        $("._MEEFsAK").html(`<a class="_ZdiEtUY" data-automation="back-btn" href="https://centr.com/shoppinglist/aisle/0/` + recipeId + `"><svg class="" xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13"><path fill="#ffffff" fill-rule="evenodd" d="M6.288 12.855a.421.421 0 0 0 .621.013.458.458 0 0 0 .011-.667L1.887 6.99h14.627A.48.48 0 0 0 17 6.514a.521.521 0 0 0-.486-.521H1.887L6.92.813a.475.475 0 0 0-.013-.68.495.495 0 0 0-.689.013S0 6.503 0 6.498l6.288 6.357z"></path></svg></a>`);
        setTimeout(function () {
            $("._MEEFsAK").html(`<a class="_ZdiEtUY" data-automation="back-btn" href="https://centr.com/shoppinglist/aisle/0/` + recipeId + `"><svg class="" xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13"><path fill="#ffffff" fill-rule="evenodd" d="M6.288 12.855a.421.421 0 0 0 .621.013.458.458 0 0 0 .011-.667L1.887 6.99h14.627A.48.48 0 0 0 17 6.514a.521.521 0 0 0-.486-.521H1.887L6.92.813a.475.475 0 0 0-.013-.68.495.495 0 0 0-.689.013S0 6.503 0 6.498l6.288 6.357z"></path></svg></a>`);
        }, 500);

        setTimeout(function () {
            $("._MEEFsAK").html(`<a class="_ZdiEtUY" data-automation="back-btn" href="https://centr.com/shoppinglist/aisle/0/` + recipeId + `"><svg class="" xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13"><path fill="#ffffff" fill-rule="evenodd" d="M6.288 12.855a.421.421 0 0 0 .621.013.458.458 0 0 0 .011-.667L1.887 6.99h14.627A.48.48 0 0 0 17 6.514a.521.521 0 0 0-.486-.521H1.887L6.92.813a.475.475 0 0 0-.013-.68.495.495 0 0 0-.689.013S0 6.503 0 6.498l6.288 6.357z"></path></svg></a>`);
        }, 1500);
    }
});
