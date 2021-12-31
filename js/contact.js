$("#reason").on("change", (event) => {
    let reason = event.target.value;
    if (reason == "Product info") {
        $("#productIdContainer").removeClass("hidden");
    } else {
        $("#productIdContainer").addClass("hidden");
    }
});

function validate() {
    let reason = $("#reason").val();
    let productId = $("#productId").val();
    var productIds = ["SAMCFXONI", "SOOF5O4CM", "STQIWQJT0", "SVT9O596E", "STQIWQJT0", "SHR67DKG1"];
    if (reason == "Product info" && !productIds.includes(productId)) {
        event.preventDefault();
        alert("Enter Valid Product ID!");
    }
}