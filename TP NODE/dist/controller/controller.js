"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
const mysqldb_1 = require("../mysqldb");
exports.controller = {
    getEmployee: (req, res) => new Promise((resolve, reject) => {
        mysqldb_1.pool.getConnection((err, connection) => {
            if (err) {
                console.log(err);
                res.send(err);
                return;
            }
            console.log('MySQL Connection: ', connection.threadId);
            connection.query('SELECT * FROM employee limit 10', (err, results) => {
                if (err)
                    console.error(err);
                //console.log('User Query Results: ', results);
                connection.release();
                res.send(results);
            });
        });
    }),
    getEmployeeById: (req, res) => new Promise((resolve, rejects) => {
        let empId = req.params.id;
        mysqldb_1.pool.getConnection((err, connection) => {
            if (err) {
                console.log(err);
                res.send(err);
                return;
            }
            console.log('MySQL Connection: ', connection.threadId);
            connection.query('SELECT * FROM employee WHERE legajo = ?', [empId], (err, results) => {
                if (err)
                    console.error(err);
                connection.release();
                res.send(results);
            });
        });
    }),
    createEmployee: (req, res) => {
        const { apellido, nombre, dni, sector, fecha_ingreso, activo } = req.body;
        var values = [apellido, nombre, dni, sector, fecha_ingreso, activo];
        console.log(values);
        mysqldb_1.pool.getConnection((err, connection) => {
            if (err) {
                console.error(err);
                res.send(err);
                return;
            }
            else {
                let sql = 'INSERT INTO employee (apellido, nombre, dni, sector, fecha_ingreso, activo) VALUES (?, ?, ?, ?, ?, ?)';
                connection.query(sql, values, (err, results) => {
                    if (err) {
                        console.error(err);
                        res.json({ message: "Error al tratar de insertar" });
                    }
                    else {
                        res.json({ message: "Articulo Insertado con exito" });
                    }
                });
            }
        });
    },
    updateEmployee: (req, res) => {
        const { legajo, apellido, nombre, dni, sector, fecha_ingreso, activo } = req.body;
        var values = [apellido, nombre, dni, sector, fecha_ingreso, activo, legajo];
        mysqldb_1.pool.getConnection((err, connection) => {
            if (err) {
                console.error(err);
                res.send(err);
                return;
            }
            else {
                let sql = 'UPDATE employees SET apellido=?, nombre=?, dni=?, sector=?, fecha_ingreso=?, activo=? WHERE legajo=?';
                connection.query(sql, values, (err, results) => {
                    if (err) {
                        console.error(err);
                        res.json({ message: "Error al actualizar " + err });
                    }
                    else {
                        res.json({ message: "Articulo Actualizado con exito" });
                    }
                });
            }
        });
    },
    deleteEmployee: (req, res) => {
        let empId = req.params.id;
        mysqldb_1.pool.getConnection((err, connection) => {
            if (err) {
                console.log(err);
                res.send(err);
                return;
            }
            console.log('MySQL Connection: ', connection.threadId);
            connection.query('DELETE FROM employee WHERE legajo = ?', [empId], (err, results) => {
                if (err) {
                    console.error(err);
                    res.json({ message: 'Error al eliminar un empleado' });
                }
                else {
                    res.json({ message: 'Empleajo eliminado exitosamente' });
                }
            });
        });
    }
};
