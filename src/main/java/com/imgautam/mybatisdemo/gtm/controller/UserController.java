/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.imgautam.mybatisdemo.gtm.controller;

import com.imgautam.mybatisdemo.gtm.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;

/**
 *
 * @author GTM
 */
@Controller
public class UserController {
    
    @Autowired UserService userService;
    
    @GetMapping("listUsers")
    public String listUsers(ModelMap map){
        
        return "pages/listUsers";
    }
    
}
