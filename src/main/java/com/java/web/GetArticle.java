package com.java.web;

 

import java.io.BufferedReader; 
import java.io.FileOutputStream; 
import java.io.IOException; 
import java.io.InputStream; 
import java.io.InputStreamReader; 
import java.net.MalformedURLException; 
import java.net.URL; 
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher; 
import java.util.regex.Pattern; 

public class GetArticle { 	
	
	public static List<String> main(String url, String index) throws IOException {		
		String result = getSource(url);		
		
		if(index.equals("2")) {
			List<String> tag = getTagValues(result);				
			return tag;			
			
		}else if(index.equals("3")) {
			List<String> tag = getNewTagValues(result);			
			return tag;
		}
		return null;
		
		
	}

	public static String getSource(String url) throws MalformedURLException, IOException { 
		String output = ""; 
		BufferedReader br = new BufferedReader(new InputStreamReader(new URL(url).openStream())); 
		String line; 
		while ((line = br.readLine()) != null) { 
		output += line; 
		} 
		return output; 
	} 
	
	//private static final Pattern TAG_REGEX = Pattern.compile("\\<div class\\=\\\"mw\\-parser\\-output\\\"\\>(.+?)\\<div class\\=\\\"toclimit\\-3\\\"\\>");

	private static final Pattern TAG_REGEX = Pattern.compile("\\<\\/tbody\\>\\<\\/table\\>(.+?)\\<div class\\=\\\"toclimit\\-3\\\"\\>");
	
	private static List<String> getTagValues(final String str) {
	    final List<String> tagValues = new ArrayList<String>();
	    final Matcher matcher = TAG_REGEX.matcher(str);
	    while (matcher.find()) {
	        tagValues.add(matcher.group(1).replace("/wiki", "https://en.wikipedia.org/wiki"));
	    }
	    return tagValues;
	}
	
	private static final Pattern NTAG_REGEX = Pattern.compile("\\\"\\_endContentsText\\\" \\>(.+?)\\<div class\\=\\\"end\\_date\\\"\\>");
	
	private static List<String> getNewTagValues(final String str) {
	    final List<String> tagValues = new ArrayList<String>();
	    final Matcher matcher = NTAG_REGEX.matcher(str);
	    while (matcher.find()) {
	        tagValues.add(matcher.group(1));
	    }
	    return tagValues;
	}
	
	

	
	
} 

