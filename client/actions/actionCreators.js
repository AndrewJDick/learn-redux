// increment 
export function increment(index) {
	
	// Returned object is the ACTION, the parent function is the ACTION CREATOR
	return {
		type: 'INCREMENT_LINKS',
		index
	}
}

// add comment 
export function addComment (postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		author,
		comment
	}
}

// remove comment 
export function removeComment (postId, index) {
	return {
		type: 'REMOVE_COMMENT',
		postId,
		index
	}
}



