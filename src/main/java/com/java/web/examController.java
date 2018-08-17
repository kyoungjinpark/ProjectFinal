package com.java.web;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.URI;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FileStatus;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;
import org.springframework.stereotype.Controller;
import org.springframework.util.Base64Utils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import net.sf.json.JSONObject;
import net.sf.json.JSONSerializer;
@Controller
public class examController {
	@Resource(name="hdConf")
	Configuration conf;	

	String inputFile = "/input/data";
	HashMap<String, Object> resultMap; 
	List<HashMap<String, Object>> resultList;		

	@RequestMapping("/dir")
	public void dir(HttpServletResponse response) throws IOException {

		resultList = new ArrayList<HashMap<String, Object>>();
		getDir(inputFile); // 디렉토리 호출
		System.out.println(resultList.size());
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("result", resultList);
		JSONObject json = JSONObject.fromObject(JSONSerializer.toJSON(resultMap));
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/json;charset=utf-8");
		response.getWriter().write(json.toString());				
	}
	
	public void getDir(String newPath) throws IOException {
		FileStatus[] dirList = getStatus(newPath); // 목록 호출
		for(int i = 0; i < dirList.length; i++) {
			String name = dirList[i].getPath().getName();
			if(dirList[i].isDirectory()) {
				getDir(newPath + "/" + name); // 다음 디렉토리 호출
			}else {
				resultMap = new HashMap<String,Object>();
				resultMap.put(name, newPath + "/" + name);
				resultList.add(resultMap);
			}
		}
	}

	public FileStatus[] getStatus(String newPath) throws IOException {
		URI uri = URI.create(newPath);
		Path path = new Path(uri);
		FileSystem file = FileSystem.get(uri, conf);
		return file.listStatus(path); // 목록 보내기
	}
	

	@RequestMapping(value = "getImg", method = RequestMethod.POST)
	public void getImg(HttpServletRequest req, HttpServletResponse resp) {
		HashMap<String, Object> result = new HashMap<String, Object>();
		String inDate   = new java.text.SimpleDateFormat("yyyyMMdd").format(new java.util.Date());
		String inTime   = new java.text.SimpleDateFormat("HHmmss").format(new java.util.Date());
		
		String imgData = req.getParameter("imgData");
		System.out.println(imgData);
		OutputStream out = null;
		// base64 이미지로 저장
		try {
			String path = "C:/Users/goodee/Desktop/HDWeb/HDWeb/src/main/webapp/resources/upload/";
			String fileNm = inDate+inTime+".png";
			File dir = new File(path);
			if(!dir.exists()) {
				dir.mkdirs();
			}
			File file = new File(path + fileNm);
			out = new FileOutputStream(file);
			byte[] byteDat = Base64Utils.decodeFromString(imgData.replace("data:image/png;base64,", ""));
			out.write(byteDat);
			result.put("status", 1);
			result.put("url", "/eis/resources/upload/" + fileNm);
		} catch (Exception e) {
			e.printStackTrace();
			result.put("status", 0);
		} finally {
			try {
				System.out.println("이미지 저장성공!!!");
				out.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
	
}
