/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.imgautam.mybatisdemo.gtm.controller;

import com.imgautam.mybatisdemo.gtm.model.User;
import com.imgautam.mybatisdemo.gtm.mybatis.UserMybatis;
import java.util.List;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author GTM
 */
@Controller
public class DemoController {

     private UserMybatis usersMapper;

    public DemoController(UserMybatis usersMapper) {
        this.usersMapper = usersMapper;
    }


    @GetMapping("/all")
    public List<User> getAll() {
        return usersMapper.findAll();
    }

    @GetMapping("/update")
    private List<User> update() {

        User users = new User();
        users.setUsername("Youtube");
        users.setEmail("imgautam@gmail.com");

        usersMapper.insert(users);

        return usersMapper.findAll();
    }
    
    
    @GetMapping("/")
    public String demoApp(ModelMap model) {
        model.addAttribute("data","Im-gautam");
//         User users = new User();
//        users.setUsername("Youtube");
//        users.setEmail("imgautam@gmail.com");
//
//        usersMapper.insert(users);
        usersMapper.findAll();
        return "layout";
    }
}
