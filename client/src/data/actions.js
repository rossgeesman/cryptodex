const SHOW_MODAL = 'SHOW_MODAL'
const HIDE_MODAL = 'HIDE_MODAL'

export function showModal(modal) {
  console.log('Showing some modal')
  return { 
  	type: SHOW_MODAL,
  	modal
  }
}

export function hideModal() {
  console.log('Heyooo')
  return {
  	type: HIDE_MODAL
  }
}