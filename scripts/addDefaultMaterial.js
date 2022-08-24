function addDefaultMaterial(
  sturmankersVorderseite,
  sturmankersRuckseite,
  sturmankerMat,
  allPosts,
  fencePostMat,
  allWoodPosts,
  woodMaterials,
  allFences,
  addFenceSings
) {
  //sturmankers material
  sturmankersVorderseite.forEach((elm) => {
    elm.material = sturmankerMat;
  });
  sturmankersRuckseite.forEach((elm) => {
    elm.material = sturmankerMat;
  });
  allPosts.forEach((elm) => {
    elm.material = fencePostMat;
  });
  //fences material
  allFences.forEach((element) => {
    element.forEach((elm) => {
      elm.material = woodMaterials[0];
    });
  });

  allWoodPosts.forEach((elm) => {
    elm.material = woodMaterials[0];
  });
  //sings to not be visible
  addFenceSings.forEach((elm) => {
    elm.isVisible = false;
  });
}
