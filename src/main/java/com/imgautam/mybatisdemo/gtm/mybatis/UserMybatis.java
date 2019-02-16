/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.imgautam.mybatisdemo.gtm.mybatis;

import com.imgautam.mybatisdemo.gtm.model.User;
import java.util.List;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectKey;

/**
 *
 * @author GTM
 */
@Mapper
public interface UserMybatis {

    @Select("select * from user")
    List<User> findAll();

    @Insert("insert into user(username,email) values(#{username},#{email})")
//    @SelectKey(statement = "SELECT LAST_INSERT_ID()", keyProperty = "id",
//            before = false, resultType = Integer.class)
    void insert(User user);

}
