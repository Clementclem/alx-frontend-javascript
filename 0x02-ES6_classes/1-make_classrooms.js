import ClassRoom from './0-classroom.js';

function initializeRooms() {
	const roomSizes = [19, 20, 34];
	const rooms = [];

	roomSizes.forEach(size => {
		const room = new ClassRoom(size);
		rooms.push(room);
	});

	return rooms;
}
