package com.java.web;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.apache.hadoop.conf.Configuration;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	@Resource(name="hdConf")
	Configuration conf;
	
	String inputFile = "/input/csv";
	HashMap<String, Object> resultMap; 
	List<HashMap<String, Object>> resultList;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home() {
		logger.info("Welcome home!");
		return "home";
	}
	@RequestMapping(value = "/home2", method = RequestMethod.GET)
	public String home2() {
		
		return "home2";
	}
	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public String index() {
		
		return "index";
	}
	
	
}
