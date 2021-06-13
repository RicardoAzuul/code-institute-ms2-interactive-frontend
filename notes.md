Grid breakpoints
https://getbootstrap.com/docs/4.6/layout/overview/

<!-- Initial code to throw into html -->
    let html = '';
    for (i = 0; i < boardHeight; i++) {
      html +=
        `
        <div class="row tile-row">
        <div class="col-6 col-md-3 col-lg-2">
          <div class="tile">
           <img src="/assets/images/pug_face_looking_up.jpg" class="img-fluid" alt="Pug face looking up">  
          </div>
        </div>
        <div class="col-6 col-md-3 col-lg-2">
        <div class="tile">
        <img src="/assets/images/pug_face_looking_up.jpg" class="img-fluid" alt="Pug face looking up">  
        </div>
        </div>
      </div>
        `
    }
    $('#game-board').html(html);



<!-- Full html for creating row and col around tile-rows and tile-cols -->
          <div class="row" id="row-around-all-tiles">
      <div class="col col-md-6 col-lg-4 offset-md-3 offset-lg-4" id="col-around-all-tiles">
        <div class="row tile-row">
          <div class="col tile-col">
            <div class="tile">
              <img src="https://via.placeholder.com/200" class="img-fluid" alt="Pug face looking up">
            </div>
          </div>
          <div class="col tile-col">
            <div class="tile">
              <img src="https://via.placeholder.com/200" class="img-fluid" alt="Pug face looking up">
            </div>
          </div>
        </div>
        <div class="row tile-row">
          <div class="col tile-col">
            <div class="tile">
              <img src="https://via.placeholder.com/200" class="img-fluid" alt="Pug face looking up">
            </div>
          </div>
          <div class="col tile-col">
            <div class="tile">
              <img src="https://via.placeholder.com/200" class="img-fluid" alt="Pug face looking up">
            </div>
          </div>
        </div>
      </div>
    </div>