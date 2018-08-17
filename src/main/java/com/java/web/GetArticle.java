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
	
	public static void main(String[] args) throws IOException {
		String url = "https://en.wikipedia.org/wiki/Marvel_Cinematic_Universe";
		String result = getSource(url);		
		List<String> tag = getTagValues(result);
		System.out.println(tag);
		
		
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
	
	private static final Pattern TAG_REGEX = Pattern.compile("(\\<p\\>[\\s\\S]+\\<\\/p\\>[\\s\\S]\\<div class\\=\\\"toclimit\\-3\\\"\\>)");

	
	private static List<String> getTagValues(final String str) {
	    final List<String> tagValues = new ArrayList<String>();
	    final Matcher matcher = TAG_REGEX.matcher(str);
	    System.out.println(str);
	    System.out.println(matcher);
	    while (matcher.find()) {
	        tagValues.add(matcher.group(1));
	    }
	    return tagValues;
	}
	
	public static ArrayList<String> getTypedFile(String text) {
		String regex = "(\\<p\\>[\\s\\S]+\\<\\/p\\>[\\s\\S]\\<div class\\=\\\"toclimit\\-3\\\"\\>)"; 	
		Matcher m = Pattern.compile(regex).matcher(text); 
		System.out.println(m);
		ArrayList<String> output = new ArrayList<>(); 
		System.out.println(m.find());
		while (m.find()) { 
		output.add(m.group()); 
		} 
		return output; 
	} 

	
	
} 

