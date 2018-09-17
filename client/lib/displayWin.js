import swal from 'sweetalert2'

const displayWin = () => {
  swal({
    type: 'success',
    title: 'YOU WIN!',
    text: 'Well done! You have a superb memory.'
  })
}

export default displayWin
