const dir = [
	[-1, 0],
	[1,0],
	[0, -1],
	[0, 1]
];

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
	// 1. Base Case
	// off the map
	if (
		curr.x < 0 || curr.x >= maze[0].length ||
		curr.y < 0 || curr.y >= maze.length
	) {
		return false;
	}

	// on a wall
	if (maze[curr.y][curr.x] === wall) {
		return false
	}

	// at the end
	if (curr.x === end.x && curr.y === end.y) {
		path.push(curr);
		return true;
	}	

	// we've been here before
	if (seen[curr.y][curr.x]) {
		return false;
	}

	// 2. Recurse
	// pre
	path.push(curr);
	seen[curr.y][curr.x] = true;

	// recurse
	for (let i = 0; i< dir.length; ++i) {
		const [x, y] = dir[i];

		if (walk(maze, wall, {
			x: curr.x + x,
			y: curr.y + y,
		}, end, seen, path)) {
			return true;
		}
	}
	
	// post
	path.pop();
	return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
	const seen: boolean[][] = [];
	const path: Point[] = [];

	console.log(maze);

	for (let i = 0; i < maze.length; ++i) {
		seen.push( new Array(maze[0].length).fill(false));
	}

	walk(maze,wall,start, end, seen,path);

	console.log(path);

	return path;

}
