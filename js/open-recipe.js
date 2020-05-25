$(function () {
    setTimeout(function () {
        let button = `
        <div id="openRecipe" style="
            border: 1px solid white;
            padding: 10px 40px;
            font-size: 12px;
            letter-spacing: 1.5px;
            font-weight: 500;
            color: white;
            border-radius: 6px;
            position: absolute;
            margin-top: -34px;
            margin-left: -180px;
            cursor: pointer;
            ">OPEN RECIPE</div>
        `;
        $("._3xEaKSR").append(button);

        $("#openRecipe").on("click", function () {
            let recipeId = document.location.href.split("/");
            recipeId = recipeId[recipeId.length - 1];

            document.location.href = "https://centr.com/snack/show/" + recipeId + "/a";
        });
    }, 500);
});
