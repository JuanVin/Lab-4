import { Request, Response } from "express"
import  { pool }  from "../mysqldb"

export let controller = {
    getEmployee: (req: Request, res: Response) => new Promise ((resolve, reject) => {
        pool.getConnection((err: any, connection: any) => {
            if(err){
                console.log(err)
                res.send(err)
                return;
            }
            console.log('MySQL Connection: ', connection.threadId);
            connection.query('SELECT * FROM employee limit 10', (err: any, results: any) => {
                if (err) console.error(err);
                //console.log('User Query Results: ', results);
                connection.release()
                res.send(results)
            });
        })
    })
    ,
    getEmployeeById: (req: Request, res: Response) => new Promise ((resolve, rejects) => {
        let empId = req.params.id
        pool.getConnection((err: any, connection: any) => {
            if(err){
                console.log(err)
                res.send(err)
                return;
            }
            console.log('MySQL Connection: ', connection.threadId);
            connection.query('SELECT * FROM employee WHERE legajo = ?', [empId], (err: any, results: any) => {
                if (err) console.error(err);
                connection.release()
                res.send(results)
            });
        })
    })   
    ,
    createEmployee: (req: Request, res: Response) => {
        const {apellido, nombre, dni, sector, fecha_ingreso, activo} = req.body;
        var values = [apellido, nombre, dni, sector, fecha_ingreso, activo];
        console.log(values)
        pool.getConnection((err: any, connection: any) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        else{
            let sql:string = 'INSERT INTO employee (apellido, nombre, dni, sector, fecha_ingreso, activo) VALUES (?, ?, ?, ?, ?, ?)';
            connection.query(sql, values, (err: any, results: any) => {
                if (err) {
                  console.error(err);
                  res.json({message:"Error al tratar de insertar"})
                }else{
                  res.json({message:"Articulo Insertado con exito"})
                }
              });
        }          
      });
    },
    updateEmployee: (req: Request, res: Response) => {
        const {legajo, apellido, nombre, dni, sector, fecha_ingreso, activo} = req.body;
        var values = [ apellido, nombre, dni, sector, fecha_ingreso, activo, legajo];
        pool.getConnection((err: any, connection: any) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        else{
            let sql:string = 'UPDATE employees SET apellido=?, nombre=?, dni=?, sector=?, fecha_ingreso=?, activo=? WHERE legajo=?';
            connection.query(sql, values, (err:any, results:any) => {
                if (err) {
                  console.error(err);
                  res.json({message:"Error al actualizar " + err})
                }else{
                  res.json({message:"Articulo Actualizado con exito"})
                }
               
              });
        }          
      });
    },
    deleteEmployee: (req: Request, res: Response) => {
        let empId = req.params.id
        pool.getConnection((err: any, connection: any) => {
            if(err){
                console.log(err)
                res.send(err)
                return;
            }
            console.log('MySQL Connection: ', connection.threadId);
            connection.query('DELETE FROM employee WHERE legajo = ?', [empId], (err: any, results: any) => {
                if (err) {
                    console.error(err);
                    res.json({message: 'Error al eliminar un empleado'})
                }else {
                    res.json({message: 'Empleajo eliminado exitosamente'})
                }
            });
        })
    }
}
    
