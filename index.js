$(document).ready(function(){
  var data = 
  [
    {
      title: "NYC Generation Tech",
      location: "NYC",
      date: "7/1/14 - 9/6/14",
      desc: "The best program in the world."
    },
    {
      title: "Startup Weekend EDU",
      location: "NYC",
      date: "1/30/14 - 2/1/14",
      desc: "Transform your education ideas into action in 54 hours. Find the right people with complimentary skills and the passion & dedication to build an education product in one weekend. Design for learning, conduct user tests, receive coaching from experienced education designers & industry professionals and win prizes that will help take your idea to the next level!"
    }
  ];

  $('#container').isotope({
  // options
  itemSelector : '.item',
  layoutMode : 'fitRows'
});
});