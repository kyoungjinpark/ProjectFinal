package com.java.web;

import java.io.IOException;

import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Reducer;

public class MrReducer extends Reducer<Text, IntWritable, Text, IntWritable> {
	@Override
	protected void reduce(Text key, Iterable<IntWritable> value, Context context) throws IOException, InterruptedException {
		
		IntWritable result = new IntWritable();
		
		int sum =0;
		for(IntWritable v : value) {
			sum =  v.get();	
			result.set(sum);
			context.write(key, result);
		}		
				
		
		
	}
}
