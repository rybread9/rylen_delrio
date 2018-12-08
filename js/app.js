// console.log("hello");
// console.log($);


$(()=>{

  $('.aboutMeLink').click(()=>{
    $('html', 'body').animate({
      scrollTop: $('#aboutMe').position().top}, 1000
    );
  });

  $('.contactLink').click(()=>{
    $('html', 'body').animate({
      scrollTop: $('#contact').position().top}, 1000
    );
  });

  $('.projectsLink').click(()=>{
    $('html', 'body').animate({
      scrollTop: $('#projects').position().top}, 1000
    );
  });

})
