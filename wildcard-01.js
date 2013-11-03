var request = require('request')

var r = request('http://www.trywildcard.com/problem1input.txt', function f (err, res, body) {
  var rows = body.split('\n')
  rows.pop() // remove last empty line
  
  var column = ''
    , row = ''
    , combinations = 0
    , c, r, matched, empty

  // look in columns first
  
  for (c = 0; c < rows[0].length; c++) {
    column = ''

    for (r = 0; r < rows.length; r++) {
      column += rows[r][c]
    }  

    matched = column.match(/\*/g)
    empty = matched && matched.length || 0

    if (empty >= 5) {
      combinations += fac(empty)/fac(empty-5)
    }
  }

  for (r = 0; r < rows.length; r++) {
    row = ''

    for (c = 0; c < rows[r].length; c++) {
      row += rows[r][c]
    }  

    matched = row.match(/\*/g)
    empty = matched && matched.length || 0

    if (empty >= 5) {
      combinations += fac(empty)/fac(empty-5)
    }
  }

  console.log(combinations)
})

function fac(n) {
  if (n <= 1) return 1
  return n * fac(n -1)
}