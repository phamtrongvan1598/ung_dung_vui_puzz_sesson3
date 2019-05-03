
<script>
let img1 = "part1x1.jpg";
let img2 = "part2x1.jpg";
let img3 = "part3x1.jpg";
let img4 = "part4x1.jpg";
let img5 = "part5x1.jpg";
function puzzles() {
    if (img1 === "part1x1.jpg"){
        img1 = "part1x2.jpg";
    }else if (img1 === "part1x2"){
        img1 ="part1x3.jpg";
    } else if (img1 === "part1x3"){
        img1 = "part1x1";
    }
    document.getElementById("img1").src = "img/"+img1;
    check();

}
</script>