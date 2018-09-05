package com.java.web;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.avro.data.Json;
import org.apache.hadoop.conf.Configuration;
import org.mortbay.util.ajax.JSON;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.Base64Utils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import net.sf.json.JSONObject;
import net.sf.json.JSONSerializer;

import java.util.List;

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
	@RequestMapping(value = "/visual", method = RequestMethod.GET)
	public String visual() {
		
		return "visual";
	}
	
	
	@RequestMapping(value = "/read", method = RequestMethod.GET)
	public void read(HttpServletRequest req, HttpServletResponse res) throws IOException {
	    String inputcheck = req.getParameter("uriIndex");
	    String indexcheck = req.getParameter("index");
	    List<String> result = GetArticle.main(inputcheck, indexcheck);
		
	    HashMap<String, Object> resultMap = new HashMap<String, Object>();
	    resultMap.put("data", result);
	    
	    
		res.setCharacterEncoding("utf-8");
		res.setContentType("text/json;charset=utf-8");
		JSONObject json = JSONObject.fromObject(JSONSerializer.toJSON(resultMap));
		res.getWriter().write(json.toString());
		
		
	}
	
	@RequestMapping(value = "/getJson", method = RequestMethod.POST)
	public void getImg(HttpServletRequest req, HttpServletResponse resp) {
		HashMap<String, Object> result = new HashMap<String, Object>();
		String inDate   = new java.text.SimpleDateFormat("yyyyMMdd").format(new java.util.Date());
		String inTime   = new java.text.SimpleDateFormat("HHmmss").format(new java.util.Date());
		String jsonData = req.getParameter("jsonData");
		OutputStream out = null;
		try {
			String path = "C:/Users/gudi/Downloads/eclipse/workspace/ProjectFinal/src/main/webapp/resources/";
			String fileNm = "forenames.json";
			File dir = new File(path);
			if(!dir.exists()) {
				dir.mkdirs();
			}
			//ByteArrayOutputStream stream = new ByteArrayOutputStream();
			//Json.createWriter(stream).write(jsonData);
			File file = new File(path + fileNm);
			out = new FileOutputStream(file);
			//byte[] byteDat = stream.toByteArray() ;
			byte[] byteDat = jsonData.getBytes();
			out.write(byteDat);
			result.put("status", 1);
			result.put("url", "/resources/upload/" + fileNm);
		} catch (Exception e) {
			e.printStackTrace();
			result.put("status", 0);
		} finally {
			try {
				System.out.println("제이슨 데이터 저장성공!!!");
				out.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}	
	
}
