#include <nan.h>
// #include <iostream>
// namespace demo{
//     using v8::FunctionCallbackInfo;
//     using v8::Isolate;
//     using v8::Local;
//     using v8::Object;
//     using v8::String;
//     using v8::Value;

//     void Method(const FunctionCallbackInfo<Value>& args){
//         Isolate* isolate = args.GetIsolate();
//         char test[] = "test";
//         args.GetReturnValue().Set(String::NewFromUtf8(isolate, test));
//     }
// }

void Method(const Nan::FunctionCallbackInfo<v8::Value>& info){
    info.GetReturnValue().Set(Nan::New("World!").ToLocalChecked());
}

void Init(v8::Local<v8::Object> exports){
    v8::Local<v8::Context> context = exports->CreationContext();
    exports->Set(context,
                Nan::New("Hello ").ToLocalChecked(),
                Nan::New<v8::FunctionTemplate>(Method)
                    ->GetFunction(context).ToLocalChecked());
}

NAN_MODULE(hello, Init);