grains.forEach(function (item) {
  var $ul = $('ul');
  var $ul = $('<li>');
  var $ul = $('<img>');
  var $ul = $('<p>');
  var $ul = $('<h2>');

  $ul.append($li);
  $img.attr('src', 'images/' + item.img);
  $li.append($img);
  $h3.html(item.name);
  $li.append($h2);
  $p.html(item.desc);
  $li.append($p);
});
