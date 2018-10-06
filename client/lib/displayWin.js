import swal from 'sweetalert2'

const displayWin = (score) => {
  swal({
    type: 'success',
    title: 'YOU WIN!',
    text: `Well done! It took you ${score} clicks to match them all.`
  })
}

export default displayWin
