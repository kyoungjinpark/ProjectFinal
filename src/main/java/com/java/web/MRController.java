package com.java.web;

import java.net.URI;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FSDataInputStream;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.input.TextInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.mapreduce.lib.output.TextOutputFormat;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import net.sf.json.JSONObject;
import net.sf.json.JSONSerializer;

@Controller
public class MRController {
	@Resource(name="hdConf")
	Configuration conf;
	static int team;
	static String inputString;
	//자바에서 맵리듀스 돌리기
	@RequestMapping(value="/mrCall", method=RequestMethod.POST)
	public void mrCall(HttpServletRequest req,HttpServletResponse res) throws Exception {
		inputString = req.getParameter("inputString"); //check 1: team1, 2: team2, 3: team3
		String inputcheck = req.getParameter("team"); //check hero name
		team = Integer.parseInt(inputcheck);
		String inDate   = new java.text.SimpleDateFormat("yyyyMMdd").format(new java.util.Date());
		String inTime   = new java.text.SimpleDateFormat("HHmmss").format(new java.util.Date());
		System.out.println(inputString+"어딨지"+inputcheck);
			
		Job job = Job.getInstance(conf,"test");
		URI inputUri = URI.create("/input/data/"+inputString);
		URI outputUri = URI.create("/result/"+inDate+inTime);
		FileInputFormat.addInputPath(job,new Path(inputUri));
		FileOutputFormat.setOutputPath(job, new Path(outputUri));
		System.out.println(inputUri);
		job.setInputFormatClass(TextInputFormat.class);
		job.setOutputFormatClass(TextOutputFormat.class);
		
		job.setOutputKeyClass(Text.class);
		job.setOutputValueClass(IntWritable.class);
		job.setJarByClass(com.java.web.MRController.class);
		job.setMapperClass(com.java.web.MrMapper.class);
		job.setReducerClass(com.java.web.MrReducer.class);
		
		System.out.println("현재");
		job.waitForCompletion(true);
		
		
		System.out.println("End!!!");
		
		//read
		
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("adr", "/result/20180816"+inTime);
		
		FileSystem fs = FileSystem.get(conf);
		FSDataInputStream fi = fs.open(new Path("/result/20180816"+inTime+"/part-r-00000"));
	    byte[] b = new byte[5000];
		int ia = 0;
		String result = "";
		while((ia = fi.read(b)) != -1) {
		   result = new String(b, 0, ia);
		}
	      String[] rows = result.split("\n");
	      List<HashMap<String, Object>> list = new ArrayList<HashMap<String, Object>>();
	      for(int j = 0; j <rows.length; j++) {
	         String row = rows[j];
	         String[] cols = row.split("\t");
	         HashMap<String, Object> map = new HashMap<String, Object>();
	         map.put(cols[0], cols[1]);
	         list.add(map);
	      }				
		
	    /*resultMap.put("data", list);
	    if(team == 1) {
	    	resultMap.put("type","team1");
	    }else if (team ==2) {
	    	resultMap.put("type","team2");
	    }else if (team ==3) {
	    	resultMap.put("type","team3");
	    }
	    */
		
		res.setCharacterEncoding("utf-8");
		res.setContentType("text/json;charset=utf-8");
		JSONObject json = JSONObject.fromObject(JSONSerializer.toJSON(resultMap));
		res.getWriter().write(json.toString());
		
		
	}
	
}
