'use client'

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { subjects } from "@/constants"

// 1. Define Schema
const formSchema = z.object({
  name: z.string().min(1, "Companion name is required."),
  subject: z.string().min(1, "Please select a subject."),
  topic: z.string().min(5, "Topic must be at least 5 characters."),
  voice: z.string().min(1, "Please select a voice."),
  style: z.string().min(1, "Please select a style."),
  duration: z.coerce.number().min(1, "Duration must be at least 1 minute."),
})

type FormValues = z.infer<typeof formSchema>;

const CompanionForm = () => {
  // 2. Initialize Form
  const form = useForm<z.input<typeof formSchema>, any, FormValues>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      name: "",
      subject: "",
      topic: "",
      voice: "",
      style: "",
      duration: 15,
    },
  })

  const onSubmit = async (data: FormValues) => {
    console.log("Form Data:", data);
    // Add your API call here
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create AI Companion</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          
          {/* Companion Name */}
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <div className="space-y-2">
                <label className="text-sm font-medium">Companion Name</label>
                <Input 
                  {...field} 
                  placeholder="e.g., Einstein" 
                  className={fieldState.error ? "border-destructive" : ""}
                />
                {fieldState.error && (
                  <p className="text-xs text-destructive">{fieldState.error.message}</p>
                )}
              </div>
            )}
          />

          {/* Subject Select */}
          <Controller
            name="subject"
            control={form.control}
            render={({ field, fieldState }) => (
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className={fieldState.error ? "border-destructive" : ""}>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject.toLowerCase()}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {fieldState.error && (
                  <p className="text-xs text-destructive">{fieldState.error.message}</p>
                )}
              </div>
            )}
          />

          {/* Topic Textarea */}
          <Controller
            name="topic"
            control={form.control}
            render={({ field, fieldState }) => (
              <div className="space-y-2">
                <label className="text-sm font-medium">What should they help with?</label>
                <Textarea 
                  {...field} 
                  placeholder="Describe the specific topic..."
                  className={fieldState.error ? "border-destructive" : ""}
                />
                {fieldState.error && (
                  <p className="text-xs text-destructive">{fieldState.error.message}</p>
                )}
              </div>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            {/* Voice Select */}
            <Controller
              name="voice"
              control={form.control}
              render={({ field, fieldState }) => (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Voice</label>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className={fieldState.error ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select voice" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  {fieldState.error && (
                    <p className="text-xs text-destructive">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />

            {/* Style Select */}
            <Controller
              name="style"
              control={form.control}
              render={({ field, fieldState }) => (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Style</label>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className={fieldState.error ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="formal">Formal</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                    </SelectContent>
                  </Select>
                  {fieldState.error && (
                    <p className="text-xs text-destructive">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />
          </div>

          {/* Duration Input */}
          <Controller
            name="duration"
            control={form.control}
            render={({ field, fieldState }) => (
              <div className="space-y-2">
                <label className="text-sm font-medium">Duration (minutes)</label>
                <Input 
                  type="number" 
                  {...field}
                  value={field.value as number}
                  onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  className={fieldState.error ? "border-destructive" : ""}
                />
                {fieldState.error && (
                  <p className="text-xs text-destructive">{fieldState.error.message}</p>
                )}
              </div>
            )}
          />

          <Button type="submit" className="w-full cursor-pointer">
            Build your Companion
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default CompanionForm