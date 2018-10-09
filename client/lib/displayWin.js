import swal from 'sweetalert2'

const displayWin = (score) => {
  let ranking = score < 14 ? 'Lucky' : score < 20 ? 'Smart' : score < 30 ? 'Dog' : 'Bug'

  swal({
    type: 'success',
    title: `YOU WIN! - Ranking: ${ranking}`,
    text: `Well done! It took you ${score} clicks to match them all.`
  })
}

export default displayWin
