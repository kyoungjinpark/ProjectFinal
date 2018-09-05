package com.java.web;

import java.io.IOException;

import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Mapper;

public class MrMapper extends Mapper<LongWritable, Text, Text, IntWritable> {

	@Override
	protected void map(LongWritable key, Text value, Mapper<LongWritable, Text, Text, IntWritable>.Context context)	throws IOException, InterruptedException {
		HeroBean hb = new HeroBean(value);		
		Text outputKey = new Text();		
		IntWritable outputValue = new IntWritable();
		
		if(MRController.inputString.equals("team1")) {			
				if(MRController.team == 1) {
					outputKey.set(hb.getYearM()+"\t"+"IronMan");
					outputValue.set(hb.getFirstH());
					context.write(outputKey, outputValue);				
				}else if(MRController.team == 2) {
					outputKey.set(hb.getYearM()+"\t"+"Hulk");
					outputValue.set(hb.getSecondH());
					context.write(outputKey, outputValue);
				}else if(MRController.team == 3) {
					outputKey.set(hb.getYearM()+"\t"+"Thor");
					outputValue.set(hb.getThirdH());
					context.write(outputKey, outputValue);
				}else if(MRController.team == 4) {
					outputKey.set(hb.getYearM()+"\t"+"HawkEye");
					outputValue.set(hb.getFourthH());
					context.write(outputKey, outputValue);
				}else if(MRController.team == 5) {
					outputKey.set(hb.getYearM()+"\t"+"BlackWidow");
					outputValue.set(hb.getFifthH());
					context.write(outputKey, outputValue);
				}
		}		
		else if(MRController.inputString.equals("team2")) {			
				if(MRController.team == 6) {
					outputKey.set(hb.getYearM()+"\t"+"CaptainAmerica");
					outputValue.set(hb.getFirstH());
					context.write(outputKey, outputValue);				
				}else if(MRController.team == 7) {
					outputKey.set(hb.getYearM()+"\t"+"WinterSoldier");
					outputValue.set(hb.getSecondH());
					context.write(outputKey, outputValue);
				}else if(MRController.team == 8) {
					outputKey.set(hb.getYearM()+"\t"+"StarLord");
					outputValue.set(hb.getThirdH());
					context.write(outputKey, outputValue);
				}else if(MRController.team == 9) {
					outputKey.set(hb.getYearM()+"\t"+"Groot");
					outputValue.set(hb.getFourthH());
					context.write(outputKey, outputValue);
				}else if(MRController.team == 10) {
					outputKey.set(hb.getYearM()+"\t"+"Thanos");
					outputValue.set(hb.getFifthH());
					context.write(outputKey, outputValue);
				}
		}		
		else if(MRController.inputString.equals("team3")) {			
				if(MRController.team == 11) {
					outputKey.set(hb.getYearM()+"\t"+"Antman");
					outputValue.set(hb.getFirstH());
					context.write(outputKey, outputValue);				
				}else if(MRController.team == 12) {
					outputKey.set(hb.getYearM()+"\t"+"DoctorStrange");
					outputValue.set(hb.getSecondH());
					context.write(outputKey, outputValue);
				}else if(MRController.team == 13) {
					outputKey.set(hb.getYearM()+"\t"+"Spiderman");
					outputValue.set(hb.getThirdH());
					context.write(outputKey, outputValue);
				}else if(MRController.team == 14) {
					outputKey.set(hb.getYearM()+"\t"+"BlackPanther");
					outputValue.set(hb.getFourthH());
					context.write(outputKey, outputValue);
				}else if(MRController.team == 15) {
					outputKey.set(hb.getYearM()+"\t"+"DeadPool");
					outputValue.set(hb.getFifthH());
					context.write(outputKey, outputValue);
				}
		}
		/*else if(MRController.inputString.equals("team3")) {			
			if(MRController.team == 16) {
				outputKey.set(hb.getYearM()+"Month");
				outputValue.set(hb.getFirstH());
				context.write(outputKey, outputValue);				
			}
	}*/
			

	}
}
