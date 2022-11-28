import pg from "pg";
const { Pool } = pg;


const credentials = {
    user: "postgres",
    host: "localhost",
    database: "nodedemo",
    password: "yourpassword",
    port: 5432,
};

// Connect with a DB.

const pool = new Pool(credentials);

export async function getPoints() {
    const text = `SELECT * FROM storypoints;`
    return pool.query(text);
}
export async function getStoryboards() {
    const text = `SELECT * FROM storyboards;`
    return pool.query(text);
}

export async function update(personId, fullname) {
    const text = `UPDATE people SET fullname = $2 WHERE id = $1`;
    const values = [personId, fullname];
    return pool.query(text, values);
}

export async function delete_storyboard(Id) {
    const text = `DELETE FROM storyboards WHERE id = $1`;
    const values = [Id];
    return pool.query(text, values);
}
