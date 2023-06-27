export default function getNeighborhoodsList() {
	this.sanfranciscoNeighborhoods = [ 'SOMA', 'Union Square'];

	const self = this;
	this.addNeighborhood = function add(newNeighborhood) {
		self.sanfranciscoNeighborhoods.push(newNeighborhood);
		return self.sanfranciscoNeighborhoods;
	};
}
