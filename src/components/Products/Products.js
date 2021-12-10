import React from "react";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous"/>
function Products() {
  return (
    <section>
        <h2 className="text-center mt-5"> Available Products</h2>
        <br/>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-lg-3 mb-2-6">
                    <div class="card-wrapper mb-4">
                        <div class="card-img"><img src="./dal.png" alt="dal" width="240px" height="240px"/></div>
                    </div>
                    <div class="text-center">
                        <h4 class="h5 mb-2"><a href="./Contact" class="text-secondary">All Types of Dals</a></h4>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3 mb-2-6">
                    <div class="card-wrapper mb-4">
                        <div class="card-img"><img src="./pulses.jpeg" alt="pulses" width="240px" height="240px"/></div>
                    </div>
                    <div class="text-center">
                        <h4 class="h5 mb-2"><a href="./Contact" class="text-secondary">All Types of Pulses</a></h4>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3 mb-2-6">
                    <div class="card-wrapper mb-4">
                        <div class="card-img"><img src="./vegetables.jpeg" alt="vegetables" width="240px" height="240px"/></div>
                    </div>
                    <div class="text-center">
                        <h4 class="h5 mb-2"><a href="./Contact" class="text-secondary">Fresh Vegetables</a></h4>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3 mb-2-6">
                    <div class="card-wrapper mb-4">
                        <div class="card-img"><img src="./Fruits.jpg" alt="fruits" width="240px" height="240px"/></div>
                    </div>
                    <div class="text-center">
                        <h4 class="h5 mb-2"><a href="./Contact" class="text-secondary">Fresh Fruits</a></h4>
                    </div>
                </div>
                <br/>
                <div class="col-sm-6 col-lg-3 mb-2-6 mb-lg-0">
                    <div class="card-wrapper mb-4">
                        <div class="card-img"><img src="./frozenveggie.png" alt="frozen vegetables" width="240px" height="240px"/></div>
                    </div>
                    <div class="text-center">
                        <h4 class="h5 mb-2"><a href="./Contact" class="text-secondary">Frozen Vegetables</a></h4>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3 mb-2-6 mb-lg-0">
                    <div class="card-wrapper mb-4">
                        <div class="card-img"><img src="./frozenfuit.png" alt="frozen fruits" width="240px" height="240px"/></div>
                    </div>
                    <div class="text-center">
                        <h4 class="h5 mb-2"><a href="./Contact" class="text-secondary">Frozen Fruits</a></h4>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3 mb-2-6 mb-sm-0">
                    <div class="card-wrapper mb-4">
                        <div class="card-img"><img src="/dehydratedveggie.png" alt="dehydrated veggie" width="240px" height="240px"/></div>
                    </div>
                    <div class="text-center">
                        <h4 class="h5 mb-2"><a href="./Contact" class="text-secondary">Dehydrated Vegetables</a></h4>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="card-wrapper mb-4">
                        <div class="card-img"><img src="./seasonal.png" alt="seasonal products" width="240px" height="240px"/></div>
                    </div>
                    <div class="text-center">
                        <h4 class="h5 mb-2"><a href="./Contact" class="text-secondary">Seasonal Products</a></h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Products;