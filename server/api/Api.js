var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
var url = require('url');

// 连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect();
var jsonWrite = function(res, ret) {
        if (typeof ret === 'undefined') {
            res.json({ code: '1', msg: '操作失败' })
        } else {
            res.json(ret)
        }
    }
    // 查询teachers接口
router.get('/teachers', (req, res) => {
    var sql = $sql.teachers

    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            jsonWrite(res, result)
        }
    })
});

router.get('/teacherDetail', (req, res) => {
    var sql = $sql.teacherDetail
    const id = req.query.id
    conn.query(sql, id, function(err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            jsonWrite(res, result)
        }
    })
});

router.get('/categories', (req, res) => {
    var sql = $sql.categories
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            jsonWrite(res, result)
        }
    })
});
router.get('/categories_primarySchool', (req, res) => {
    var sql = $sql.categories_primarySchool
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            jsonWrite(res, result)
        }
    })
});
router.get('/categories_middleSchool', (req, res) => {
    var sql = $sql.categories_middleSchool
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            jsonWrite(res, result)
        }
    })
});
router.get('/categories_highSchool', (req, res) => {
    var sql = $sql.categories_highSchool
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            jsonWrite(res, result)
        }
    })
});

module.exports = router