function solution(id_pw, db) {
    let log = db.findIndex(([id, pw]) => id == id_pw[0]);
    if (log == -1) return "fail";
    else {
        return (id_pw[1] == db[log][1]) ? "login" : "wrong pw";
    }
}